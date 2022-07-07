import React from 'react';
import { gql, useSubscription } from '@apollo/client';

const SUBSCRIPTION = gql`
  subscription {
    newNotification
  }
`;

const Dashboard = () => {
  const { data, loading, error } = useSubscription(SUBSCRIPTION);
  // const { data, loading, error, subscribeToMore } = useQuery(QUERY);

  // useEffect(() => {
  //   subscribeToMore({ document: SUBSCRIPTION });
  // }, [subscribeToMore]);

  if (error) return <p>ERROR!! {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  console.log(data);

  return <div>{data?.newNotification}</div>;
};

export default Dashboard;
