import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHighlightPipe',
  standalone: true
})
export class SearchHighlightPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
