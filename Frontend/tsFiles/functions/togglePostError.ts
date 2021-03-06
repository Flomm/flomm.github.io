export default function togglePostError(input: HTMLInputElement): void {
  input.parentElement.classList.toggle('err');
  const labelEl: HTMLLabelElement = document.querySelector(`label[for=${input.name}]`);
  labelEl.parentElement.classList.toggle('err');
}
