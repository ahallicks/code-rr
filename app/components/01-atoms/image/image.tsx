import styles from './image.module.css';

export interface IImage {
	src: string;
	alt?: string;
}

export const Image: React.FC<IImage> = ({ src, alt, ...rest }) => {
	return (
		<picture className={styles.base} data-e2e-id="image" {...rest}>
			<img src={src} alt={alt ?? 'Image'} />
		</picture>
	);
};
