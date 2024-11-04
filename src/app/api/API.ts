import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.API_URL;

export async function getGroups() {
  const response = await fetch(
    `${API_URL}groups/users/f3b36ac4-a9c0-4a45-a68e-ab4a56ff7081`
  );
  const groups = await response.json();
  return groups;
}

export async function getGroup(id: string) {
  const response = await fetch(`${API_URL}groups/${id}`);
  const group = await response.json();
  return group;
}

export async function getEventsForUser() {
  try {
    const groups = await getGroups();

    const events = await Promise.all(
      groups.map(async (group) => {
        const response = await fetch(`${API_URL}events/groups/${group.id}`);
        return response.json();
      })
    );

    return events.flat();
  } catch (error) {
    console.log(error);
  }
}

export const getUserById = async (id: string) => {
  const response = await fetch(`${API_URL}users/${id}`);
  return response.json();
};
