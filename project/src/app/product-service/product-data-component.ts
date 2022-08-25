import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class productdataservice {
    constructor(private _http:HttpClient){

    }
    productURL:string="api/ProductList";

    // ProductList: any[] = [
    //     { productCategory: "Electronics", productName: "tv", productColor: "black", productCode: 'e123', inStockQuantity: 20, price: 30000, prodDescription: "latest model", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/3…QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" },
    //     { productCategory: "Electronics", productName: "fridge", productColor: "grey", productCode: 'e323', inStockQuantity: 10, price: 45000, prodDescription: "fast cooling", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/3…QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" },
    //     { productCategory: "Fashion", productName: "adidas", productColor: "black", productCode: 'f123', inStockQuantity: 12, price: 55000, prodDescription: "latest fashion", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/3…QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" },
    //     { productCategory: "Fashion", productName: "puma", productColor: "pink", productCode: 'f2123', inStockQuantity: 20, price: 52000, prodDescription: "new", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/3…QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" },
    //     { productCategory: "Food", productName: "Chocolate", productColor: "black", productCode: 'm123', inStockQuantity: 2, price: 40000, prodDescription: "Delightful", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/3…QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" },
    //     { productCategory: "Food", productName: "Syrup", productColor: "white", productCode: 'e223', inStockQuantity: 3, price: 30000, prodDescription: "new features", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/3…QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" },
    //     { productCategory: "Book", productName: "maths", productColor: "white", productCode: 'b123', inStockQuantity: 20, price: 4000, prodDescription: "3rd edition", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/3…QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" },
    //     { productCategory: "Book", productName: "science", productColor: "black", productCode: 'b323', inStockQuantity: 30, price: 5000, prodDescription: "2nd edition", imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/3…QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" }

    // ];

    getdata():Observable<any[]>{
        return this._http.get<any[]>(this.productURL);
    }
    
}