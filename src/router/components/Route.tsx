import { ReactElement } from 'react';
import { useNavigation } from '../../hooks';

interface Props {
	path: string;
	children: ReactElement | ReactElement[] | JSX.Element;
}
export const Route = ({ path, children }: Props) => {
	const { currentPath } = useNavigation();
	if (path === currentPath) {
		return <>{children}</>;
	}
	return null;
};
