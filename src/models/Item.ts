export interface Item {
  id: number
  amount: number
  dueDate: string
  hasAutomaticPayment: boolean
  paymentAccountId: number
  paymentDate: string
  periodId: number
  serviceID: number
}
