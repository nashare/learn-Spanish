export async function getUserById(userId) {
    try {
        let response = await fetch(`https://fakeapi-server-847135678534.herokuapp.com/users/${userId}`);
        let user = await response.json();
        return user;
    } catch (error) {
        console.error('Error:', error);
    }
}