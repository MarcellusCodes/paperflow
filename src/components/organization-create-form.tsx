import React from "react";
import { Loader2, Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { useToast } from "@/components/ui/use-toast";
import { api } from "@/utils/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name of your Organization must be atleast 2 characters.",
    })
    .max(50, {
      message: "Name of your Organization must be less than 30 characters",
    }),
});

const OrganizationCreateForm = () => {
  const { data: sessionData, update } = useSession();
  const { toast } = useToast();
  const addOrganization = api.organization.add.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addOrganization.mutate(values, {
      onSuccess() {
        form.reset();
        toast({
          title: "Success",
          description: "Added Organization",
        });
        update();
      },
      onError() {
        toast({
          title: "Error",
          description: "Something went wrong.",
        });
      },
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Organization
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Organization</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="AssignWizards" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your organization display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={addOrganization.isLoading} type="submit">
              {addOrganization.isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                ""
              )}
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default OrganizationCreateForm;
