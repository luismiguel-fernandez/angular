import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patternFilter'
})
export class PatternFilterPipe implements PipeTransform {

  transform(value: any[], pattern: string): any[] {
    if (value && value.length) {
      return (value.filter(coche => coche.nombre.toLowerCase().includes(pattern.toLowerCase())))
    }
    return
  }

}
