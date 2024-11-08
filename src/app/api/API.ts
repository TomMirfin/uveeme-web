import { revalidatePath } from "next/cache";

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

export async function createGroup({
  data,
}: {
  data: { name: string; description: string };
}): Promise<any> {
  try {
    const response = await fetch(
      `http://ec2-54-246-237-164.eu-west-1.compute.amazonaws.com:3000/teams`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          description: data.description,
          userId: "0f4c7c0c-9b72-11ef-a55e-0227ff40ba33",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to create group: ${response.statusText}`);
    }

    const group = await response.json();

    return group;
  } catch (error) {
    console.error("Error creating group:", error);
    throw error;
  }
}
