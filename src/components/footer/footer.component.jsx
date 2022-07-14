const Footer = () => {
  return (
    <footer className="footer px-4 py-6">
      <div className="footer-content">
        <p className="text-sm text-gray-600 text-center">© {import.meta.env.VITE_APP_NAME} {(new Date).getFullYear()}. All rights reserved. <a
          href="https://github.com/mlab817">Developed by {import.meta.env.VITE_APP_DEVELOPER}</a></p>
      </div>
    </footer>
  )
}

export default Footer