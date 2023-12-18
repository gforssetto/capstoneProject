
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://koerqgtuqfvuumjwrbvd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZXJxZ3R1cWZ2dXVtandyYnZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1OTIzNjgsImV4cCI6MjAxODE2ODM2OH0.uGRYopw2g8e0tpeowqbG2MvM9dACcsp62hlF8WDG3N8';

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;