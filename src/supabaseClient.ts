import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://loyzwjzsjnikmnuqilmv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxveXp3anpzam5pa21udXFpbG12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NzY2OTMsImV4cCI6MjA0OTE1MjY5M30.vwXqtGwm4SG1juWZ_YxMhhZZSiQ7TbtUcB77h6wNYus';

export const supabase = createClient(supabaseUrl, supabaseKey);
