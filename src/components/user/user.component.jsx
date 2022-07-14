import avatar from '../../assets/avatar.jpg'

const User = ({ user }) => {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <img alt={user.name} className="flex-shrink-0 rounded-full w-full h-32 w-32 object-cover object-center mb-4"
             src={avatar} />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">{user.name}</h2>
            <h3 className="text-gray-500 mb-3">{user.designation}</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          </div>
      </div>
    </div>
  )
}

export default User
