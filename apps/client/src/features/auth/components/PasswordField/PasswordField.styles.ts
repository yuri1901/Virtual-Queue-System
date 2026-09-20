const passwordFieldStyles = {
  fieldLabel: "block",
  labelText: "mb-2 block text-sm font-medium text-[var(--ink)]",
  inputWrapper: "relative block",
  lockIcon: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--muted)]",
  passwordInput: "h-[var(--control-md)] w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-10 text-sm text-[var(--text)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]",
  togglePasswordButton: "absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-[var(--muted)]",
  toggleIcon: "size-4",
};

export { passwordFieldStyles };
