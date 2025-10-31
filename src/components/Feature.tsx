const Capitalize = (pString: string) => {
	return pString.charAt(0).toUpperCase() + pString.slice(1);
}

export function Feature({title, description, icon} : {title: string, description: string, icon: string}) {
	return <div className="featureItem">
			<img src={`./img/icon-${icon}.webp`} alt={`${Capitalize(icon)} Icon`} className="featureItem__icon"/>
			<h3 className="featureItem__title">{title}</h3>
			<p className="featureItem__description">{description}</p>
	</div>
}