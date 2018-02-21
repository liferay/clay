import com.google.template.soy.data.SoyListData;
import com.google.template.soy.data.SoyMapData;
import com.google.template.soy.soytree.TemplateRegistry;
import com.google.template.soy.tofu.SoyTofu;

import groovy.json.JsonOutput;
import groovy.json.JsonSlurper;

import java.io.File;

class SoyTest {
	def _templateRegistry;
	def _soyTofu;
	def namespace;

	SoyTest(TemplateRegistry templateRegistry, SoyTofu soyTofu, String namespace) {
		_templateRegistry = templateRegistry;
		_soyTofu = soyTofu;
		this.namespace = namespace;
	}
	
	SoyTestResult run() {
		try {
			def renderer = _soyTofu.newRenderer(namespace);

			renderer.setData(_getSoyData());
			
			def output = renderer.render();
			
			def expectedOutput = _getExpectedOutput();
			
			return new SoyTestResult(this, output, expectedOutput);
		} 
		catch(e) {
			return new SoyTestResult(this, e);
		}
	}
	
	def createFixtureFilesIfMissing() {
		def outputFile = new File("./fixtures/expected/${namespace}");
		
		if (!outputFile.exists()) {
			outputFile.text = "";
		}
		
		def inputFile = new File("./fixtures/input/${namespace}")

		if (!inputFile.exists()) {
			def json = JsonOutput.toJson(_buildDummyData());
			
			inputFile.text = JsonOutput.prettyPrint(json);
		}
	}
	
	def _getExpectedOutput() {
		try {
			return new File("./fixtures/expected/${namespace}").text;
		} 
		catch(e) {
			throw new Exception(
				"Failed to read expected output: ${e.message}", e);
		}
	}

	def _getSoyData() {
		try {
			def json = new File("./fixtures/input/${namespace}").text;
			def jsonSlurper = new JsonSlurper();
			def params = jsonSlurper.parseText(json);
			
			def data = new SoyMapData();
			
			params.entrySet().forEach {entry -> 
				data.put(entry.key, entry.value);
			};

			return data;
		} 
		catch(e) {
			throw new Exception(
				"Failed to read input parameters: ${e.message}", e);
		}
	}
	
	def _isOfType(types, allowedTypes) {
		types = types.toString().split("\\|");
		
		return types.findAll { type ->
			return allowedTypes.findAll { allowedType ->
				if (allowedType.endsWith("*")) {
					def prefix = allowedType.substring(0, allowedType.length() - 2);
					
					return type.startsWith(prefix);
				} 
				else {
					return allowedType.equals(type);
				}
			}.size > 0;
		}.size > 0;
	}
	
	def _buildDummyData() {
		def templateNode = _templateRegistry.basicTemplatesMap[namespace];

		def data = new HashMap();
		
		templateNode.params.each { param -> 
			def type = param.type();
			def name = param.name();
			
			if (_isOfType(type, ["list*"])) {
				data.put(name, ["(${type})"]);
			}
			else if (_isOfType(type, ["map*"])) {
				data.put(name, ["type": "(${type})"]);
			}
			else {
				data.put(name, "(${type})");
			}
		} 
		
		return data;
	}
}