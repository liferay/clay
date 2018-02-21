import com.google.template.soy.SoyFileSet;

import java.io.File;
import java.util.Collection;

class SoyTestSuite {
	def _soyFileSet;
	def _templateRegistry;
	def _soyTofu;

	SoyTestSuite(Collection<File> files) {
		def builder = SoyFileSet.builder();
		
		files.each { file ->
			builder.add(file.text, file.toString());
		}

		_soyFileSet = builder.build();
		_templateRegistry = _soyFileSet.generateTemplateRegistry();
		_soyTofu = _soyFileSet.compileToTofu();
	}
	
	Collection<SoyTestResult> run() {
		def results = [];

		_templateRegistry.basicTemplatesMap.keySet().forEach { namespace ->
			def test = new SoyTest(_templateRegistry, _soyTofu, namespace);
		
			results << test.run();
		};

		return results;
	}
}