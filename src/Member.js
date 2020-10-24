import React from 'react'

const Member = props => {
 
    console.log('member', props)

    return (
        <div className='memberList'>
            {props.memberList.map((member, index) => {
                return (
                  <div className='member' key={index}>
                    <h2>Member</h2>
                    <h3>Name: {member.name}</h3>
                    <h3>Email: {member.email}</h3>
                    <h3>Role: {member.role}</h3>
                  </div>
                )
            })}
        </div>
    )
}

export default Member
