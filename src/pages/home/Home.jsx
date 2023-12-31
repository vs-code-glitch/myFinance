import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

//styles
import styles from './Home.module.css';

//components
import TransctionForm from './TransctionForm';
import TransctionList from './TransctionList';

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions',
    ["uid", "==", user.uid],
  ["createdAt","desc"]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransctionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransctionForm uid={user.uid} />
      </div>
    </div>
  )
}

