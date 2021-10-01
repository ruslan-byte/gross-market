const validator =
{
	phone: (value) =>
	{
		const regex = /^((\+7|7|8)+ \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2})$|^((8)+ \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2})$|^[+]{1}[0-9]{16}$/;
		return	regex.test(value);
	},
	checked: (value) =>
	{
		return value;
	},
	StringDate: (value) =>
	{
		const regex = /^\d{2}\.\d{2}\.\d{4}$/;
		return regex.test(value);
	}
};
export default validator;