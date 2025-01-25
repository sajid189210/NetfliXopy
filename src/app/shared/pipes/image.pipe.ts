import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'image'
})
export class ImagePipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        return `https://image.tmdb.org/t/p/w500/${value}`;
    }
}