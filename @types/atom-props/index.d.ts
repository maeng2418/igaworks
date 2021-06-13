declare module 'atom-props' {
  interface IListItemButtonProps {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
  }

  interface ILineChartProps {
    xTitle: string;
    yTitle: stirng;
    data: { label: string; amount?: number }[];
  }

  interface ILoadingProps {
    visible: boolean;
  }

  interface IBarChartProps {
    xTitle: string;
    yTitle: stirng;
    data: { label: string; amount?: number }[];
  }
}
