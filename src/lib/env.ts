
// Utilitário para acessar variáveis de ambiente de forma segura
export const env = {
  // Variáveis de ambiente públicas (acessíveis no frontend)
  apiUrl: import.meta.env.VITE_API_URL || '',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  appName: import.meta.env.VITE_APP_NAME || 'Cariocarrosrj',
  
  // Verificar se estamos em desenvolvimento
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  mode: import.meta.env.MODE,
} as const;

// Função para verificar se todas as variáveis necessárias estão definidas
export const validateEnv = () => {
  const requiredVars = ['VITE_API_URL'] as const;
  
  for (const varName of requiredVars) {
    if (!import.meta.env[varName]) {
      console.warn(`Variável de ambiente ${varName} não está definida`);
    }
  }
};

// Executar validação em desenvolvimento
if (import.meta.env.DEV) {
  validateEnv();
}
