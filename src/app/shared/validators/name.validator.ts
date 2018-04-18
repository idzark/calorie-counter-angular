import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ValidateName(array): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (control.value === '') {
      return null;
    }

    const arrayOfDuplicates = array.filter(item => item.name.indexOf(control.value) !== -1);
    let nameExists;
    if (arrayOfDuplicates.length > 0) {
      nameExists = true;
    } else {
      nameExists = false;
    }
    return nameExists ? { nameTaken: true } : null;
  };
}

export function ValidateEditName(array, name): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (control.value === '') {
      return null;
    }

    if (control.value === name) {
      return null;
    }

    const arrayOfDuplicates = array.filter(item => item.name.indexOf(control.value) !== -1);
    let nameExists;
    if (arrayOfDuplicates.length > 0) {
      nameExists = true;
    } else {
      nameExists = false;
    }
    return nameExists ? { nameTaken: true } : null;
  };
}
