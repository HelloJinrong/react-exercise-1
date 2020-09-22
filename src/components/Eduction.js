import React from "react";
import '../styles/Eduction.scss'
const Educion = ()=>
    {
        const year = [1990, 2005, 2009, 2012];
        const contentTitle = [
            'I was born in Katowice',
            'Secondary school specializing in artistic',
            'First level graduation in Graphic Design',
            'Second level graduation in Graphic Design',
        ];
        const content = [
            'Lorem ipsum dolor sit amet , consectetur adipisicing elit . Sapiente , exercitationem , totam , dolores iste dolore est aut modi .',
            'Eos , explicabo , nam , tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus .',
            'Aspernatur , mollitia , quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis ? lusto , quibusdam asperiores unde repellat .',
            'Ducimus , aliquam tempore autem itaque et accusantium !'
        ];
        return(
            <ul>
                <li>
                    <h4 className='year'>{year[0]}</h4>
                    <div>
                        <h4>{contentTitle[0]}</h4>
                        <p>{content[0]}</p>
                    </div>
                </li>
                <li>
                    <h4 className='year'>{year[1]}</h4>
                    <div>
                        <h4>{contentTitle[1]}</h4>
                        <p>{content[1]}</p>
                    </div>
                </li>
                <li>
                    <h4 className='year'>{year[2]}</h4>
                    <div>
                        <h4>{contentTitle[2]}</h4>
                        <p>{content[2]}</p>
                    </div>
                </li>
                <li>
                    <h4 className='year'>{year[3]}</h4>
                    <div>
                        <h4>{contentTitle[3]}</h4>
                        <p>{content[3]}</p>
                    </div>
                </li>
            </ul>
        )
    }

export default Educion;
