export class FormatUtils {
	static formatDate(datestring: string): string {
		let date: Date = new Date(datestring);

		const duration = +new Date() - +date;
		const aYear = 1000 * 60 * 60 * 24 * 365;
		if (duration < aYear) {
			// less than a year ago
			const prefix: string = duration < 0 ? 'Planned Release: ' : '';
			return (
				prefix +
				date.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })
			);
		} else {
			// more than a year ago
			return date.getFullYear().toString();
		}
	}
}
