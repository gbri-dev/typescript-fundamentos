namespace casting {
  let idade: any = 25;
  (idade as number).toFixed(2);
  (idade as string).length;
  (idade as string[]).push('a');
}