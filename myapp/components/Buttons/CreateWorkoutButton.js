'use client'
import React, { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react';
import { FiPlus } from 'react-icons/fi';
import Logo from '../Logo';
import { addWorkout } from '@/lib/actions';
import { Input } from '@nextui-org/react';
import { Toast } from '@nextui-org/react';


const CreateWorkoutButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);

    try {
      await addWorkout(e.target.title.value);
      setIsOpen(false);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const handleRefresh = () => {
    window.location.reload();
  };
  

  return (
    <div>
      <div className="flex flex-col gap-2 cursor-pointer">
        <Popover
          backdrop="blur"
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <PopoverTrigger>
            <Button>
              <FiPlus /> <span>Create Workout</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2 w-[500px]">
              <h2 className="text-center">
                <Logo />
              </h2>
              <div className="text-small font-bold text-center mb-4">
                Post Your Workout Below
              </div>
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <Input
                  name="title"
                  type="text"
                  variant="bordered"
                  label="Title"
                  autoComplete="off"
                />
                <Button>
                    CREATE
                {/* // onClick={handleRefresh}
                // radius="full" type="submit" disabled={loading}
                //   {loading ? 'Creating...' : 'Create'} */}
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default CreateWorkoutButton;
