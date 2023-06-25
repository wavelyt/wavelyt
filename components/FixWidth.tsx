import { ReactNode } from 'react';

type IFixWidthProps = {
	classes?: string,
	children: string | ReactNode;
};

const FixWidth = (props: IFixWidthProps) => (
	<div className={`flex flex-col mx-auto max-w-screen-lg px-3 ${props?.classes}`}>
		{props.children}
	</div>
);

export { FixWidth };
