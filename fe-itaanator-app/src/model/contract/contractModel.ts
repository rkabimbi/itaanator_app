import { Relation } from "../relation/relationModel";

export interface IContract{
    id: number;
    confrere: boolean;
    digitalInvoice: boolean;
    invoicingMethod: string;
    invoiceAnnexe: boolean;
    comment: string;
    budget: number;
    relations: Relation[]
}

export class Contract implements IContract{
    id;
    confrere;
    digitalInvoice;
    invoicingMethod;
    invoiceAnnexe;
    comment;
    budget;
    relations;

    constructor(id: number, confrere: boolean, digitalInvoice: boolean, invoicingMethod: string, invoiceAnnexe: boolean, comment: string, budget: number, relations: Relation[]){
        this.id=id;
        this.confrere=confrere
        this.digitalInvoice=digitalInvoice
        this.invoicingMethod=invoicingMethod
        this.invoiceAnnexe=invoiceAnnexe
        this.comment=comment
        this.budget=budget
        this.relations=relations
    }
}