export function sendFormData(formData: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5;

      if (success) {
        resolve({ message: 'Данные успешно отправлены', data: formData });
      } else {
        reject(new Error('Ошибка при отправке данных'));
      }
      return success;
    }, 2000);
  });
}
