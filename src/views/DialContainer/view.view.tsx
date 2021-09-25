import React, { FC } from 'react';
import { BasicElement } from '../../components/Dials';
import { useTime } from '../../hooks';
import { DialContainerProps } from './type'


const DialContainer: FC<DialContainerProps> = (props: DialContainerProps) => {
    const { DialElement = BasicElement } = props;
    const time = useTime()
    return <div>
       <DialElement {...time} />
    </div>
}

export default DialContainer