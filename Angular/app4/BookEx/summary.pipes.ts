import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : "summary"
})
export class SummaryPipe implements PipeTransform
{
    transform(value : string)
    {
        return value.substring(0, 10) + "...";
    }
}
