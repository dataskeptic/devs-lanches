interface HeadProps {
	title: string;
	description?: string;
}

export function Head({ title, description = '' }: HeadProps) {
	document.title = `Devs Lanches | ${title}`;
	document
		.querySelector('[name="description"]')
		?.setAttribute('content', description);

	return null;
}
