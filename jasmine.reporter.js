const reporter = require('jasmine-spec-reporter')
const SpecReporter = reporter.SpecReporter

jasmine.getEnv().clearReporters() // Remove os reporters que já estavam configurados
jasmine.getEnv().addReporter(new SpecReporter({
	spec: {
		displayPending: true
	}
}))
