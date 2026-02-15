<p align="center">
  <a href="https://github.com/suitenumerique/st-projects">
    <img width="100%" alt="Projets" src="https://github.com/user-attachments/assets/0a0d0741-9bf1-4ce6-ab8a-9adebbabbdf0" />
  </a>
</p>
<p align="center">
  <img alt="Node" src="https://img.shields.io/badge/node-22-green" />
  <img alt="Docker" src="https://img.shields.io/badge/docker-required-blue" />
</p>

# Projets

Projets is the project management tool for [La Suite territoriale](https://suiteterritoriale.anct.gouv.fr/).

Built on [Planka](https://github.com/plankanban/planka), it provides a customized Kanban-style interface designed specifically for teams managing territorial and digital transformation projects.

<p align="center">
  <img width="100%" alt="Projets" src="https://github.com/user-attachments/assets/f2ed0705-1016-4465-879c-c28fdc2480f7" />
</p>

## 🎯 Features

- 📊 **Project Management**: Create projects, boards, lists, cards, labels, and tasks
- 🤝 **Collaboration**: Add card members, track time, set due dates, add attachments, write comments
- ✍️ **Rich Content**: Markdown support in card descriptions and comments
- 🔍 **Filtering**: Filter by members and labels
- ⚡ **Real-time Updates**: Live synchronization across all clients
- 🔔 **Notifications**: Internal notification system
- 🌍 **Internationalization**: Multiple interface languages (French, English)
- 🔐 **Single Sign-On**: OpenID Connect (OIDC) authentication via Keycloak
- 🎨 **Modern UI**: Built with React and modern design components

## 🐳 Docker Services

The development environment includes:

- **postgres**: PostgreSQL 16 database (port 5433)
- **keycloak-db**: PostgreSQL database for Keycloak
- **keycloak**: Keycloak authentication server (port 8080)
- **server**: Sails.js backend server
- **client**: React development server
- **proxy**: Nginx reverse proxy (port 3000)
- **init-db**: One-time database initialization service

## 📚 Additional Resources

- [Planka Documentation](https://docs.planka.cloud/)
- [Sails.js Documentation](https://sailsjs.com/documentation)
- [React Documentation](https://react.dev/)
- [Keycloak Documentation](https://www.keycloak.org/documentation)

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For major changes, please open an issue first to discuss what you'd like to change.

## License 📝

This work is released under the AGPL-3.0 license.

## 📧 Contact

For questions or issues:

- **GitHub Issues**: Use the repository's issue tracker
- **Security Issues**: Please report security vulnerabilities privately

## Gov ❤️ open source

Projets is currently led by the French [ANCT](https://anct.gouv.fr/) for use in [La Suite territoriale](https://suiteterritoriale.anct.gouv.fr/).

We are welcoming new partners and contributors to join us in this effort! So please [get in touch](mailto:contact@suite.anct.gouv.fr) if you want to help!