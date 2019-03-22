module.exports = {
    appUrl: 'https://msalangularsample.azurewebsites.net/',
    extAPIUrl: 'https://buildtodoservice.azurewebsites.net/api/todolist',
    instance: 'https://login.microsoftonline.com',
    tenant: 'msidlab4.onmicrosoft.com',
    urlNavigate: this.instance + this.tenant + '/oauth2/authorize',
    assignedUser: 'IDLAB@msidlab4.onmicrosoft.com',
    MSAUser: 'MSIDLAB4@outlook.com',
    clientID: '79d1dd3f-4de3-4b69-ac25-f2fc5eefe773',
    AppIdExternalApi: 'c22b3114-88ce-48fc-b728-3591a2e420a6',
    calendarScope: ["User.Read", "Calendars.Read"],
    externalAPIScope: ['api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user'],
    password: process.env.loginPassword,
    MSAPassword: process.env.MSA_MSIDLAB4_Password
}