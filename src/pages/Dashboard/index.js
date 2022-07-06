import React, { useEffect } from 'react';
import { gql, useQuery, useSubscription } from '@apollo/client';

const QUERY = gql`
  query {
    getMessage
  }
`;

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
