class SoyTestResult {
	final test;
	final namespace;
	final output;
	final expectedOutput;
	final passed;
	final error;
	
	SoyTestResult(SoyTest test, String output, String expectedOutput) {
		this.test = test;
		this.namespace = test.namespace;
		this.output = output;
		this.expectedOutput = expectedOutput;
		this.passed = output.equals(expectedOutput);
		this.error = null;
	}

	SoyTestResult(SoyTest test, Exception error) {
		this.test = test;
		this.namespace = test.namespace;
		this.output = null;
		this.expectedOutput = null;
		this.passed = false;
		this.error = error;
	}
	
	String toString() {
		if (failure == null) {
			return "{namespace: ${namespace}, result: OK}";
		} else {
			return "{namespace: ${namespace}, failure: ${failure}}";
		}
	}
}