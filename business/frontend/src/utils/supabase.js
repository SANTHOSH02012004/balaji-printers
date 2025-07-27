import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          ip_address: await getClientIP(),
          user_agent: navigator.userAgent
        }
      ])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: error.message }
  }
}

// Enquiry form submission
export const submitEnquiryForm = async (formData) => {
  try {
    const { data, error } = await supabase
      .from('enquiry_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service_type: formData.serviceType,
          quantity: formData.quantity,
          deadline: formData.deadline || null,
          description: formData.description,
          budget: formData.budget,
          additional_info: formData.additionalInfo,
          ip_address: await getClientIP(),
          user_agent: navigator.userAgent
        }
      ])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error submitting enquiry form:', error)
    return { success: false, error: error.message }
  }
}

// Get client IP address (basic implementation)
const getClientIP = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return data.ip
  } catch (error) {
    console.error('Error getting IP:', error)
    return null
  }
}

// Get submission statistics
export const getSubmissionStats = async () => {
  try {
    const { data, error } = await supabase
      .rpc('get_submission_stats')

    if (error) throw error
    return { success: true, data: data[0] }
  } catch (error) {
    console.error('Error getting stats:', error)
    return { success: false, error: error.message }
  }
}

// Get all submissions for dashboard
export const getAllSubmissions = async () => {
  try {
    const { data, error } = await supabase
      .from('submissions_dashboard')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error getting submissions:', error)
    return { success: false, error: error.message }
  }
} 