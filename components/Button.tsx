import { cx } from "@/lib/utils";

type IButtonProps = {
	xl?: boolean;
	children: string;
};

const Button = (props: IButtonProps) => {
	const btnClass = cx({
		btn: true,
		'btn-xl': props.xl,
		'btn-base': !props.xl,
		'btn-primary': true,
	});

	return (
		<div className={btnClass}>
			{props.children}
		</div>
	);
};

export { Button };
