import React from 'react'
import { Layout, Input, Button } from '../components/'
import { IconDash } from './icon-dash'

const ForgotPass = () => {
    return (
        <Layout>
            <div className='flex-center'>
                
                <div className='font-lobster c-primary fs-56 lh-70 flex justify-center mb-40 mt-120 flex-col items-center'>
                    <IconDash/>
                    Boginoo
                </div>
                
                <h2 className='c-primary font-ubuntu'>Нууц үг сэргээх</h2>

                <h2 className='font-ubuntu fs-16 w-300 lh-25 text-center'>Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</h2>

                <div>
                    <h2 className='fs-16'>Цахим хаяг</h2>
                    <Input className="h-40 w-350 c-primary fs-20" placeholder="name@mail.domain" />
                </div>

                <Button className="font-ubuntu fs-20 lh-23 bold c-default h-32 w-350 ph-16 mt-20 b-primary rb">Илгээх</Button>

            </div>
        </Layout>
    )
}

export default ForgotPass;


// Шинэ хэрэглэгч бол энд дарна уу?