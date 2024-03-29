import { setFilter } from '@/redux/scoreGroupsSlice';
import { PlusIcon } from '@cpns/icons';
import { Label } from '@cpns/shared';
import { RootState } from '@shared/types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClassRecordAddNew } from './ClassRecordAddNew';

export const SectionBar = () => {
  const [addNew, setAddNew] = useState(false);

  const { filter } = useSelector((s: RootState) => s.scoreGroups);
  const dispatch = useDispatch();

  const filterHandle = (option: string) => {
    dispatch(
      setFilter({
        ...filter,
        class: false,
        subject: false,
        type: false,
        [option]: !filter[option],
      })
    );
  };

  return (
    <div className="flexcentercol">
      <div className="flexcenter m-4 select-none flex-wrap gap-4 p-8">
        <Label
          className="cursor-pointer"
          isActive={filter.class}
          theme="teal"
          onClick={() => filterHandle('class')}
        >
          Class
        </Label>
        <Label
          className="cursor-pointer"
          isActive={filter.subject}
          theme="blue"
          onClick={() => filterHandle('subject')}
        >
          Subject
        </Label>
        <Label
          className="cursor-pointer"
          isActive={filter.type}
          theme="default"
          onClick={() => filterHandle('type')}
        >
          Type
        </Label>

        <PlusIcon
          className="cursor-pointer"
          fill="white"
          width="45"
          height="45"
          onClick={() => setAddNew((s) => !s)}
        />
      </div>

      {addNew && <ClassRecordAddNew onClickHandle={setAddNew} />}
    </div>
  );
};
