
import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import AWS from 'aws-sdk';
import awsConfig from './awsconfig';

const s3 = new AWS.S3(awsConfig);

const fileUpload = () => {
    const onDrop = useCallback(async (acceptedFiles) => {
        try {
            for (const file of acceptedFiles) {
                const params = {
                    Bucket: awsConfig.bucketName,
                    Key: file.name,
                    Body: file,
                };
                await s3.upload(params).promise();
                console.log('File upload successful');
            }
        }
        catch(error){
            console.error('File upload failed');
        }
    }, []);
    const { getRootProps, getInputProps } = useDropzone({onDrop});
    return (
        <div>

        </div>
    )
};

export default fileUpload;