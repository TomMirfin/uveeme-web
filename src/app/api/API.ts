const API_URL = process.env.API_URL;

export async function getUserById({ id }: { id: string }) {
  const response = await fetch(`${API_URL}/users/${id}`);
  const user = await response.json();
  return user;
}

export async function getGroups() {
  const response = await fetch(
    `http://ec2-54-246-237-164.eu-west-1.compute.amazonaws.com:3000/teams/users/0f4c7c0c-9b72-11ef-a55e-0227ff40ba33`
  );
  const groups = await response.json();

  return groups;
}

export async function getGroup(id: string) {
  const response = await fetch(`${API_URL}/groups/${id}`);
  const group = await response.json();
  return group;
}

export async function getEventsForUserById(id: string) {
  try {
    const response = await fetch(
      `http://ec2-54-246-237-164.eu-west-1.compute.amazonaws.com:3000/events/users/${id}`
    );
    const events = await response.json();

    return events;
  } catch (error) {
    console.error(error);
  }
}
