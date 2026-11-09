export interface ValidationErrors {
  name?: string;
  email?: string;
  number?: string;
  message?: string;
  bot?:string
}

export const validateName = (name: string): string | null => {
  const trimmed = name.trim();
  if (!trimmed) return 'Имя обязательно для заполнения';
  if (trimmed.length < 5) return 'Имя должно содержать минимум 5 символов';
  if (trimmed.length > 60) return 'Имя не должно превышать 60 символов';
  return null;
};

export const validateEmail = (email: string): string | null => {
  const trimmed = email.trim();
  if (!trimmed) return 'Email обязателен для заполнения';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) return 'Некорректный формат email';

  return null;
};

export const validatePhone = (phone: string): string | null => {
  const trimmed = phone.trim();
  if (!trimmed) return 'Телефон обязателен для заполнения';

  const digits = trimmed.replace(/[^\d+]/g, '');

  const phoneRegex = /^(\+7|8)\d{10}$/;

  if (!phoneRegex.test(digits)) {
    return 'Введите корректный российский номер (например, +7 999 123-45-67)';
  }

  return null;
};

export const validateForm = (data: { name: string; email: string; number: string; message:string }) => {
  const errors: ValidationErrors = {};

  const nameError = validateName(data.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  if (data.number !== '') {
    const phoneError = validatePhone(data.number);
    if (phoneError) errors.number = phoneError;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
