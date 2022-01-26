interface Option {
  id: Number;
  name: string;
  description: string;
  discount?: number;
}
interface viewProps {
  viewHandler: any;
  selectedOption?: Option;
  setSelectedOption: any;
}
interface optionProps {
  option: Option;
  selected: boolean;
  setSelectedOption: any;
}

export type { Option, optionProps, viewProps };
