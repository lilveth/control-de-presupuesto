import { formatCurrency } from '../helpers/index';

type AmountDisplayProps = {
    label?: string
    amount: number
}

export default function AmountDisplay({label, amount} : AmountDisplayProps) {
  return (
    <p className="text-2xl text-fuchsia-500 font-bold">
   {label && `${label}: `}
        <span className="font-black text-amber-600">{formatCurrency(amount)}</span>
    </p>
  )
}
