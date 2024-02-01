import supabase from './supabase';

// Signup function
export async function signUp(email, password) {
  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: 'user',
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

// Login function
export async function login(email, password) {
  try {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}
