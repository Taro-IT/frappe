import { useEffect, useState } from 'react';
import { User, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import {Nullable, wrapError} from '@frappe/common/utils';
import {auth} from '../utils/third-party/firebase';

interface UseFirebaseAuthReturnType {
  readonly currentUser: Nullable<User>;
  readonly loading: boolean;
  readonly signInWithCredentials: (email: string, password: string) => Promise<UserCredential>;
  readonly signOut: () => Promise<void>;
}

export const useFirebaseAuth = (): UseFirebaseAuthReturnType => {
  const [currentUser, setCurrentUser] = useState<Nullable<User>>(null);
  const [loading, setLoading] = useState(true);

  const clearAuth = () => {
    setCurrentUser(null);
    setLoading(true);
  }

  const signInWithCredentials = async (email: string, password: string) => {
    const [error, response] = await wrapError(signInWithEmailAndPassword(auth, email, password));

    if (error !== null) {
      throw error;
    }

    return response;
  }
  const signOut = () => auth.signOut().then(clearAuth);

  const authStateChanged = async (user?: User) => {
    if (!user) {
      setCurrentUser(null);
      setLoading(false);

      return;
    }

    setLoading(true);
    setCurrentUser(user);
    setLoading(false);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);

    return () => unsubscribe();
  }, [])

  return {
    currentUser,
    loading,
    signInWithCredentials,
    signOut
  }
}
