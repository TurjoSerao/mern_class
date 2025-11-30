import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {
    const { id } = useParams();
    const {data, isFetching, isError, isSuccess} = useQuery({
        queryKey: ['user', id],
        queryFn: async () => {
            const response = await axios.get(``)
        }
    })

    return (
        <div>

        </div>
    );
};

export default UserDetails;