import { Component, OnInit, EventEmitter, Output, Input, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../shared/models/product.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateName, ValidateEditName } from '../../shared/validators/name.validator';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  @Input() errorsList;
  @Input() validationErrors: boolean;
  @Input() products: Product[];
  @Output() add = new EventEmitter<Product>();
  @Output() update = new EventEmitter<any>();
  product: Product = <Product>{};
  addProductForm: FormGroup;
  mode: string;
  editData: Product;
  dialogTitle: string;
  productId: string;

  errorMessages = {
    name: 'Name must be between 1 and 15 characters',
    nameTaken: 'Product with that name already exists',
    number: 'Required (number)'
  };


  constructor(
    private dialogRef: MatDialogRef<ProductAddComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.mode = data.mode;
    this.editData = data.editData;
    this.productId = data.id;
  }

  get name() {
    return this.addProductForm.controls.name;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onAddProduct(product: Product) {
    this.product = this.addProductForm.value;

    if (this.addProductForm.valid) {
      this.add.emit(this.product);
      this.dialogRef.close();
    } else {
      this.validateAllFormFields(this.addProductForm);
    }
  }

  onUpdateProduct() {
    this.product = this.addProductForm.value;
    const updateData = {
      product: this.product,
      id: this.productId
    };

    if (this.addProductForm.valid) {
      this.update.emit(updateData);
      this.dialogRef.close();
    } else {
      this.validateAllFormFields(this.addProductForm);
    }
  }

  initializeDialogTitle() {
    this.dialogTitle = 'Add product';

    if (this.mode === 'edit') {
      this.dialogTitle = 'Edit product';
    }
  }

  buildForm() {
    if (this.editData) {
      this.addProductForm = new FormGroup({
        name: new FormControl(this.editData.name, [Validators.required, ValidateEditName(this.products, this.editData.name)]),
        protein: new FormControl(this.editData.protein, Validators.required),
        carbs: new FormControl(this.editData.carbs, Validators.required),
        fats: new FormControl(this.editData.fats, Validators.required),
        calories: new FormControl(this.editData.calories, Validators.required)
      });
    } else {
      this.addProductForm = new FormGroup({
        name: new FormControl('', [Validators.required, ValidateName(this.products)]),
        protein: new FormControl('', Validators.required),
        carbs: new FormControl('', Validators.required),
        fats: new FormControl('', Validators.required),
        calories: new FormControl('', Validators.required)
      });
    }
  }

  ngOnInit() {
    this.initializeDialogTitle();
    this.buildForm();
  }

}
